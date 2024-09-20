"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalButton({
    onBookingSuccess,
    children,
}: {
    onBookingSuccess?: () => void;
    children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "onboarding-session" });
      cal("ui", {
        styles: { branding: { brandColor: "#2563EB" } },
        hideEventTypeDetails: false,
        theme: "light",
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          console.log(e.detail.data);
          if (onBookingSuccess) {
            onBookingSuccess();
          }
        },
      });
    })();
  }, [onBookingSuccess]);

  return (
    <button
      data-cal-namespace="onboarding-session"
      data-cal-link="team/linkdr/onboarding-session"
      className="w-32"
      type="button"
    >
        {children}
    </button>
  );
}