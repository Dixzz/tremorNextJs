"use client"

import React from "react"
import { Filterbar } from "@/components/ui/overview/DashboardFilterbar"
import { subDays, toDate } from "date-fns"
import { overviews } from "@/data/overview-data"
import { DateRange } from "react-day-picker"
import { ChartCard } from "@/components/ui/overview/DashboardChartCard"
import { cx } from "@/lib/utils"
import { OverviewData } from "@/data/schema"

const overviewsDates = overviews.map((item) => toDate(item.date).getTime())
const maxDate = toDate(Math.max(...overviewsDates))

const categories: {
  title: keyof OverviewData
  type: "currency" | "unit"
}[] = [
  {
    title: "Rows read",
    type: "unit",
  },
  {
    title: "Rows written",
    type: "unit",
  },
  {
    title: "Queries",
    type: "unit",
  },
  {
    title: "Payments completed",
    type: "currency",
  },
  {
    title: "Sign ups",
    type: "unit",
  },
  {
    title: "Logins",
    type: "unit",
  },
]
export default function DashboardFooter() {
  const [selectedDates, setSelectedDates] = React.useState<
    DateRange | undefined
  >({
    from: subDays(maxDate, 30),
    to: maxDate,
  })

  return <section aria-labelledby="usage-overview">
    <h1
      id="usage-overview"
      className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
    >
      Overview
    </h1>
    <div
      className="sticky top-16 z-20 flex items-center justify-between border-b border-gray-200 bg-white pb-4 pt-4 sm:pt-6 lg:top-0 lg:mx-0 lg:px-0 lg:pt-8 dark:border-gray-800 dark:bg-gray-950">
      <Filterbar
        maxDate={maxDate}
        minDate={new Date(2024, 0, 1)}
        selectedDates={selectedDates}
        onDatesChange={(dates) => setSelectedDates(dates)}
      />
    </div>
    <dl
      className={cx(
        "mt-10 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      )}
    >
      {categories.map((category) => {
        return (
          <ChartCard
            key={category.title}
            title={category.title}
            type={category.type}
            selectedDates={selectedDates}
            selectedPeriod={"last-year"}
          />
        )
      })}
    </dl>
  </section>
}