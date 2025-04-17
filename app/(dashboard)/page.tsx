"use client"

import { Area, Grid } from "@/components/grid"
import routes from "@/config/routes"
import { useBlockInfo } from "@/hooks/useBlockInfo"
import { formatNumber } from "@/lib/utils/number"
import { Discover } from "./(components)/discover"
import { Linker } from "./(components)/linker"
import { Portfolio } from "./(components)/portfolio"
import { Recents } from "./(components)/recents"
import { Stat } from "./(components)/stat"
import { TVL } from "./(components)/tvl"
import { Validators } from "./(components)/validators"
import s from "./page.module.scss"

export default function Page() {
  const { lastBlockNumber, blockTime, gasPriceUSD } = useBlockInfo()

  return (
    <>
      <Grid className={s.top}>
        <Area area="a">
          <Portfolio />
        </Area>
        <Area area="b">
          <Stat
            icon="hugeicons:blockchain-02"
            label="Block Height"
            value={formatNumber(lastBlockNumber)}
            left="#"
          />
        </Area>
        <Area area="c">
          <Stat
            icon="hugeicons:time-management"
            label="Block Time"
            value={blockTime}
            right="s"
          />
        </Area>
        <Area area="d">
          <Stat
            icon="hugeicons:coins-02"
            label="Average Cost"
            value={gasPriceUSD}
            left="<"
          />
        </Area>
        <Area area="e">
          <Validators />
        </Area>
        <Area area="f">
          <Discover />
        </Area>
        <Area area="g">
          <Linker
            icon="hugeicons:chart-rose"
            href={routes.delegations}
            text="My Delegations"
          />
        </Area>
        <Area area="h">
          <Linker
            icon="hugeicons:bitcoin-withdraw"
            href={routes.governance}
            text="Governance Vote"
          />
        </Area>
        <Area area="i">
          <Recents />
        </Area>
        <Area area="j">
          <TVL />
        </Area>
      </Grid>
    </>
  )
}
