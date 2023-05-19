import { MyEventsContext } from "@/context/MyEventsContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const useGetEventDetails = () => {
  const router = useRouter();
  const myEventsContext = useContext(MyEventsContext);
  let eventId = router?.query?.slug;
  const eventDetail = myEventsContext.myEventsIdHash[eventId];
  return { eventDetail };
};

export default useGetEventDetails;
