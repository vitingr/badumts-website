"use client";

import Loader from "@/components/config/Loader";
import { UserContextProps, UserProps } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<UserContextProps | any>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps[] | any>([]);

  async function getSessionInfo() {
    try {
      const requisition = await fetch("/api/data-user");
      const response = await requisition.json();

      if (response) {
        setSession(response);
      }
    } catch (error) {
      throw new Error("Não foi possível obter os dados da sessão do usuário");
    } finally {
      setIsLoading(false);
    }
  }

  async function getUserInfo() {
    try {
      const requisition = await fetch(
        `https://badumts.onrender.com/user/${session.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseText = await requisition.text();

      if (responseText.trim() !== "") {
        const response = JSON.parse(responseText);
        setUser(response);
      } else {
        await createUser().then(async () => {
          await getUserInfo()
        })
      }
    } catch (error) {
      throw new Error(
        `Não foi possível obter os dados do usuário no banco de dados`
      );
    }
  }

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:3030/user/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: session.id as string,
          name: `${session.firstName} ${session.lastName}`,
          photo: session.imageUrl,
          email: session.emailAddresses[0].emailAddress as string,
        }),
      });

      if (response.ok) {
        setUser(response);
      } else {
        throw new Error("Erro ao se conectar com o backend");
      }
    } catch (error) {
      throw new Error("Não foi possível criar uma conta para o usuário");
    }
  };

  useEffect(() => {
    getSessionInfo();
  }, []);

  useEffect(() => {
    if (session && session.id !== undefined && !isLoading) {
      getUserInfo();
    }
  }, [isLoading, session]);

  return session.id ? (
    <UserContext.Provider value={{ session, user, getSessionInfo }}>
      {children}
    </UserContext.Provider>
  ) : (
    <Loader />
  );
};

export const infoUser = () => useContext(UserContext);
