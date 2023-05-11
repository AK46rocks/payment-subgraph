import {
  ProxyOwnerUpdate as ProxyOwnerUpdateEvent,
  ProxyUpdated as ProxyUpdatedEvent
} from "../generated/MaticPay/MaticPay"
import { ProxyOwnerUpdate, ProxyUpdated } from "../generated/schema"

export function handleProxyOwnerUpdate(event: ProxyOwnerUpdateEvent): void {
  let entity = new ProxyOwnerUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._new = event.params._new
  entity._old = event.params._old

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProxyUpdated(event: ProxyUpdatedEvent): void {
  let entity = new ProxyUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._new = event.params._new
  entity._old = event.params._old

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
