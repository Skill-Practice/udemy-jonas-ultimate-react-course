"use client";

import ReservationCard from "@/app/_components/ReservationCard";
import { deleteBooking } from "../_lib/actions";
import { useOptimistic } from "react";

export default function ReservationList({ bookings }) {
  const [optmisticBookings, optmisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optmisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {/* {bookings.map((booking) => ( */}
      {optmisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
