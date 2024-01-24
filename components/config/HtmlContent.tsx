import React from "react";

const HtmlContent = ({ html }: { html: any }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlContent;
