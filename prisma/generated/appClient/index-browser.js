
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ClientEmailChangeRequestScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  clientId: 'clientId'
});

exports.Prisma.ClientPasswordResetRequestScalarFieldEnum = makeEnum({
  token: 'token',
  createdAt: 'createdAt',
  email: 'email',
  wasUsed: 'wasUsed',
  clientId: 'clientId'
});

exports.Prisma.ClientPushTokenScalarFieldEnum = makeEnum({
  token: 'token',
  clientId: 'clientId'
});

exports.Prisma.ClientScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  numericPasswordHash: 'numericPasswordHash',
  name: 'name',
  notifyAnnouncements: 'notifyAnnouncements',
  notifyNewProducts: 'notifyNewProducts',
  notifyEventsAndActions: 'notifyEventsAndActions'
});

exports.Prisma.ClientSessionScalarFieldEnum = makeEnum({
  token: 'token',
  clientId: 'clientId'
});

exports.Prisma.ContractWithdrawRequestScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  contractId: 'contractId',
  value: 'value',
  status: 'status'
});

exports.Prisma.CustomerServiceScalarFieldEnum = makeEnum({
  id: 'id',
  tel: 'tel',
  email: 'email',
  whatsapp: 'whatsapp',
  address: 'address'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  title: 'title',
  body: 'body',
  createdAt: 'createdAt',
  payload: 'payload'
});

exports.Prisma.NotificationsClientsScalarFieldEnum = makeEnum({
  isViewed: 'isViewed',
  notificationId: 'notificationId',
  clientId: 'clientId'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PanelUserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name'
});

exports.Prisma.PanelUserSessionScalarFieldEnum = makeEnum({
  token: 'token',
  panelUserId: 'panelUserId'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  tel: 'tel',
  whatsapp: 'whatsapp',
  email: 'email',
  name: 'name',
  shortDescription: 'shortDescription',
  imageSrc: 'imageSrc',
  order: 'order',
  show: 'show'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.ClientEmailChangeRequestStatus = makeEnum({
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
});

exports.ContractWithdrawRequestStatus = makeEnum({
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
});

exports.NotificationType = makeEnum({
  basic: 'basic',
  navigator: 'navigator'
});

exports.Prisma.ModelName = makeEnum({
  PanelUser: 'PanelUser',
  PanelUserSession: 'PanelUserSession',
  Client: 'Client',
  ClientSession: 'ClientSession',
  ClientPasswordResetRequest: 'ClientPasswordResetRequest',
  ClientEmailChangeRequest: 'ClientEmailChangeRequest',
  ClientPushToken: 'ClientPushToken',
  ContractWithdrawRequest: 'ContractWithdrawRequest',
  Notification: 'Notification',
  NotificationsClients: 'NotificationsClients',
  CustomerService: 'CustomerService',
  Product: 'Product'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
