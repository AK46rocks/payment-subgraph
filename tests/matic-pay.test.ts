import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ProxyOwnerUpdate } from "../generated/schema"
import { ProxyOwnerUpdate as ProxyOwnerUpdateEvent } from "../generated/MaticPay/MaticPay"
import { handleProxyOwnerUpdate } from "../src/matic-pay"
import { createProxyOwnerUpdateEvent } from "./matic-pay-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _new = Address.fromString("0x0000000000000000000000000000000000000001")
    let _old = Address.fromString("0x0000000000000000000000000000000000000001")
    let newProxyOwnerUpdateEvent = createProxyOwnerUpdateEvent(_new, _old)
    handleProxyOwnerUpdate(newProxyOwnerUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProxyOwnerUpdate created and stored", () => {
    assert.entityCount("ProxyOwnerUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProxyOwnerUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_new",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProxyOwnerUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_old",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
