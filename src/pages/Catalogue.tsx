import { useEffect } from "react";
import { RunLine } from "../components/RunLine/RunLine";
import { Header } from "../components/Header/Header";
import ScrollToHashElement from "../services/ScrollToHashElement";
import { FooterApart } from "../components/PageMentors/FooterApart/FooterApart";
import { CatalogueContent } from "../components/PageCatalogue/CatalogueContent/CatalogueContent";

export const Catalogue = () => {
  useEffect(() => {
    document.title = 'Catalogue';
  }, []);

  return (
    <>
      <ScrollToHashElement />
      <RunLine />
      <Header />
      <CatalogueContent />
      <FooterApart />
    </>
  )
}