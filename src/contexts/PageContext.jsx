import React from "react";

const PageContext = React.createContext({
  title: "",
  subtitle: "",
});

export const PageProvider = ({ children }) => {
  const [page, setPage] = React.useState({
    title: "",
    subtitle: "",
  });
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <title>{page.title || "Faqih Context"}</title>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => React.useContext(PageContext);
