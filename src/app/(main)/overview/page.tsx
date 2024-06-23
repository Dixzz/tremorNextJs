import { Button } from "@tremor/react"
import { Button as RButton } from "@radix-ui/themes"
import { CategoryBarCard } from "@/components/ui/overview/DashboardCategoryBarCard"
import { ProgressBarCard } from "@/components/ui/overview/DashboardProgressBarCard"
import { OverviewData } from "@/data/schema"
import React from "react"
import DashboardFooter from "@/components/ui/overview/DashboardFooter"

export type PeriodValue = "previous-period" | "last-year" | "no-comparison"


export type KpiEntry = {
  title: string
  percentage: number
  current: number
  allowed: number
  unit?: string
}

const data: KpiEntry[] = [
  {
    title: "Rows read",
    percentage: 48.1,
    current: 48.1,
    allowed: 100,
    unit: "M",
  },
  {
    title: "Rows written",
    percentage: 78.3,
    current: 78.3,
    allowed: 100,
    unit: "M",
  },
  {
    title: "Storage",
    percentage: 26,
    current: 5.2,
    allowed: 20,
    unit: "GB",
  },
]

const data2: KpiEntry[] = [
  {
    title: "Weekly active users",
    percentage: 21.7,
    current: 21.7,
    allowed: 100,
    unit: "%",
  },
  {
    title: "Total users",
    percentage: 70,
    current: 28,
    allowed: 40,
  },
  {
    title: "Uptime",
    percentage: 98.3,
    current: 98.3,
    allowed: 100,
    unit: "%",
  },
]

export type KpiEntryExtended = Omit<
  KpiEntry,
  "current" | "allowed" | "unit"
> & {
  value: string
  color: string
}

const data3: KpiEntryExtended[] = [
  {
    title: "Base tier",
    percentage: 68.1,
    value: "$200",
    color: "bg-indigo-600 dark:bg-indigo-500",
  },
  {
    title: "On-demand charges",
    percentage: 20.8,
    value: "$61.1",
    color: "bg-purple-600 dark:bg-indigo-500",
  },
  {
    title: "Caching",
    percentage: 11.1,
    value: "$31.9",
    color: "bg-gray-400 dark:bg-gray-600",
  },
]

export default function Overview() {

  return (
    <>
      <section aria-labelledby="current-billing-cycle">
        <Button>aas</Button>
        <RButton>RButton</RButton>
        <h1
          id="current-billing-cycle"
          className="scroll-mt-10 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          Current billing cycle
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-14 sm:mt-8 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">
          <ProgressBarCard
            title="Usage"
            change="+0.2%"
            value="68.1%"
            valueDescription="of allowed capacity"
            ctaDescription="Monthly usage resets in 12 days."
            ctaText="Manage plan."
            ctaLink="#"
            data={data}
          />
          <ProgressBarCard
            title="Workspace"
            change="+2.9%"
            value="21.7%"
            valueDescription="weekly active users"
            ctaDescription="Add up to 20 members in free plan."
            ctaText="Invite users."
            ctaLink="#"
            data={data2}
          />
          <CategoryBarCard
            title="Costs"
            change="-1.4%"
            value="$293.5"
            valueDescription="current billing cycle"
            subtitle="Current costs"
            ctaDescription="Set hard caps in"
            ctaText="cost spend management."
            ctaLink="#"
            data={data3}
          />
        </div>
      </section>
      <DashboardFooter/>
    </>
  )
}
