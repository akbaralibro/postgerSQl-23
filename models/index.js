const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const PayMethod = require('./payment_method.model')(sequelize, Sequelize)
const DeliveryMethod = require('./delivery_method.model')(sequelize, Sequelize)
const Booking = require('./booking.model')(sequelize, Sequelize)
const CartItem = require('./cart_item.model')(sequelize, Sequelize)
const Cart = require('./cart.model')(sequelize, Sequelize)
const CustomerCard = require('./customer_card.model')(sequelize, Sequelize)
const Admin = require('./admin.model')(sequelize, Sequelize)
const TicketStatus = require('./ticket_status.model')(sequelize, Sequelize)
const Ticket = require('./ticket.model')(sequelize, Sequelize)
const Customer = require('./customer.model')(sequelize, Sequelize)
const CustomerAddress = require('./customer_address.model')(sequelize,Sequelize)
const Event = require('./event.model')(sequelize, Sequelize)
const Seat = require('./seat.model')(sequelize, Sequelize)
const SeatType = require('./seat_type.model')(sequelize, Sequelize)
const EventType = require('./event_type.model')(sequelize, Sequelize)
const HumanCategory = require('./human_category.model')(sequelize, Sequelize)
const Venue = require('./venue.model')(sequelize, Sequelize)
const District = require('./district.model')(sequelize, Sequelize)
const Lang = require('./lang.model')(sequelize, Sequelize)
const VenuePhoto = require('./venue_photo.model')(sequelize, Sequelize)
const VenueTypes = require('./venue_types.model')(sequelize, Sequelize)
const Region = require('./region.model')(sequelize, Sequelize)
const Types = require('./types.model')(sequelize, Sequelize)


PayMethod.associate(sequelize.models)
DeliveryMethod.associate(sequelize.models)
Booking.associate(sequelize.models)
CartItem.associate(sequelize.models)
Cart.associate(sequelize.models)
CustomerCard.associate(sequelize.models)
TicketStatus.associate(sequelize.models)
Ticket.associate(sequelize.models)
Customer.associate(sequelize.models)
CustomerAddress.associate(sequelize.models)
Event.associate(sequelize.models)
Seat.associate(sequelize.models)
SeatType.associate(sequelize.models)
EventType.associate(sequelize.models)
HumanCategory.associate(sequelize.models)
Venue.associate(sequelize.models)
District.associate(sequelize.models)
Lang.associate(sequelize.models)
VenuePhoto.associate(sequelize.models)
VenueTypes.associate(sequelize.models)
Region.associate(sequelize.models)
Types.associate(sequelize.models)

module.exports = {
	PayMethod,
	DeliveryMethod,
	Booking,
	CartItem,
	Cart,
	CustomerCard,
	Admin,
	TicketStatus,
	Ticket,
	Customer,
	CustomerAddress,
	Event,
	Seat,
	SeatType,
	EventType,
	HumanCategory,
	Venue,
	District,
	Lang,
	VenuePhoto,
	VenueTypes,
	Region,
	Types,
}
