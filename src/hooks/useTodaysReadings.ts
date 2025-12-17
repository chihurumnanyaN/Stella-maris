import { useQuery } from "@tanstack/react-query";

const fetchTodaysReadings = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const url = `https://cpbjr.github.io/catholic-readings-api/readings/${year}/${month}-${day}.json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch readings");

  const data = await res.json();

  // Only return the necessary fields
  return {
    date: data.date,
    firstReading: {
      title: "First Reading",
      ref: data.readings.firstReading,
    },
    psalm: {
      title: "Responsorial Psalm",
      ref: data.readings.psalm,
      response: "",
    },
    gospel: {
      title: "Gospel",
      ref: data.readings.gospel,
    },
    usccbLink: data.usccbLink,
  };
};

export const useTodaysReadings = () =>
  useQuery({
    queryKey: ["todays-readings"],
    queryFn: fetchTodaysReadings,
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
