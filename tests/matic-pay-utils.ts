import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProxyOwnerUpdate, ProxyUpdated } from "../generated/MaticPay/MaticPay"

export function createProxyOwnerUpdateEvent(
  _new: Address,
  _old: Address
): ProxyOwnerUpdate {
  let proxyOwnerUpdateEvent = changetype<ProxyOwnerUpdate>(newMockEvent())

  proxyOwnerUpdateEvent.parameters = new Array()

  proxyOwnerUpdateEvent.parameters.push(
    new ethereum.EventParam("_new", ethereum.Value.fromAddress(_new))
  )
  proxyOwnerUpdateEvent.parameters.push(
    new ethereum.EventParam("_old", ethereum.Value.fromAddress(_old))
  )

  return proxyOwnerUpdateEvent
}

export function createProxyUpdatedEvent(
  _new: Address,
  _old: Address
): ProxyUpdated {
  let proxyUpdatedEvent = changetype<ProxyUpdated>(newMockEvent())

  proxyUpdatedEvent.parameters = new Array()

  proxyUpdatedEvent.parameters.push(
    new ethereum.EventParam("_new", ethereum.Value.fromAddress(_new))
  )
  proxyUpdatedEvent.parameters.push(
    new ethereum.EventParam("_old", ethereum.Value.fromAddress(_old))
  )

  return proxyUpdatedEvent
}
