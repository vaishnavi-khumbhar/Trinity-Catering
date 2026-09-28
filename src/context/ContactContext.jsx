import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => {
    setIsContactOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContact = () => {
    setIsContactOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <ContactContext.Provider
      value={{
        isContactOpen,
        openContact,
        closeContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error(
      "useContact must be used inside ContactProvider"
    );
  }

  return context;
};