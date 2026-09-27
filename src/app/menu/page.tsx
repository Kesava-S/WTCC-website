import { Metadata } from "next";
import MenuContent from "@/components/MenuContent";

export const metadata: Metadata = {
  title: "Menu | Wild Thing Colombian Coffee",
  description: "View our full menu of Colombian coffee, arepas, empanadas, fresh juices and more.",
};

export default function MenuPage() {
  return <MenuContent />;
}
