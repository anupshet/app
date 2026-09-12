import { useLocation } from "react-router-dom";
import { ALL_RESORTS } from "../lib/destinations";
import { generalEnquiryMessage } from "../lib/whatsapp";

export function useEnquiryContext() {
  const { pathname } = useLocation();
  const resort = ALL_RESORTS.find((item) => item.path === pathname);
  return { resort, message: resort?.enquiryMessage || generalEnquiryMessage() };
}