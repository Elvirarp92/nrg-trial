import {
  CounterpartyType,
  DealStatus,
  DealProposedTo,
  DealBilling,
  DealSense,
} from '@/types/apiTypes'

const dealStatusLabels: { [key in DealStatus]: string } = {
  0: 'Inactive',
  1: 'Unverified',
  2: 'Verified',
}

const dealProposedToLabels: { [key in DealProposedTo]: string } = {
  0: 'None',
  1: 'Amend',
  2: 'Delete',
}

const dealBillingLabels: { [key in DealBilling]: string } = {
  0: 'None',
  1: 'In Progress',
  10: 'Completed',
  20: 'Cancelled',
  21: 'Rejected',
  30: 'Failed',
}

const dealSenseLabels: { [key in DealSense]: string } = {
  1: 'Buy',
  2: 'Sell',
}

const counterpartyTypeLabels: { [key in CounterpartyType]: string } = {
  1: 'Client',
  2: 'Market',
  3: 'Otc',
}

export const getDealStatusLabel = (status: DealStatus): string =>
  dealStatusLabels[status]
export const getDealProposedToLabel = (proposedTo: DealProposedTo): string =>
  dealProposedToLabels[proposedTo]
export const getDealBillingLabel = (billing: DealBilling): string =>
  dealBillingLabels[billing]
export const getDealSenseLabel = (sense: DealSense): string =>
  dealSenseLabels[sense]
export const getCounterpartyTypeLabel = (type: CounterpartyType) =>
  counterpartyTypeLabels[type]
