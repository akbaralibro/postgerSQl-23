const express = require('express')
const cors = require('cors')
const setupSwagger = require('./swagger/swagger')
const sequelize = require('./config/database')
require('dotenv').config()

const paymentMethodRoute = require('./routes/payment.method.route')
const deliveryMethodRoute = require('./routes/delivery.method.route')
const bookingRoute = require('./routes/booking.route')
const cartItemRoute = require('./routes/cart_item.route')
const cartRoute = require('./routes/cart.route')
const customerCardRoute = require('./routes/customer_card.route')
const adminRoute = require('./routes/admin.route')
const ticketStatus = require('./routes/ticket_status.route')
const ticketRoute = require('./routes/ticket.route')
const customerRoute = require('./routes/customer.route')
const customerAddressRoute = require('./routes/customer_address.route')
const eventRoute = require('./routes/event.route')
const seatRoute = require('./routes/seat.route')
const seatType = require('./routes/seat_type.route')
const eventTypeRoute = require('./routes/event_type.route')
const humanCategoryRoute = require('./routes/human_category.route')
const venueRoute = require('./routes/venue.route')
const districtRoute = require('./routes/district.route')
const langRoute = require('./routes/lang.route')
const venuePhotoRoute = require('./routes/venue_photo.route')
const venueTypesRoute = require('./routes/venue_type.route')
const regionRoute = require('./routes/region.route')
const typesRoute = require('./routes/types.route')



const app = express()

app.use(express.json())
app.use(cors())

setupSwagger(app)

// Routes
app.use('/paymentMethods', paymentMethodRoute)
app.use('/deliveryMethods', deliveryMethodRoute)
app.use('/bookings',bookingRoute)
app.use('/cartItems',cartItemRoute)
app.use('/carts',cartRoute)
app.use('/customerCards',customerCardRoute)
app.use('/admins',adminRoute)
app.use('/ticketStatus',ticketStatus)
app.use('/tickets',ticketRoute)
app.use('/customers',customerRoute)
app.use('/customerAddresses',customerAddressRoute)
app.use('/events',eventRoute)
app.use('/seats',seatRoute)
app.use('/seatTypes',seatType)
app.use('/eventTypes',eventTypeRoute)
app.use('/humanCategories',humanCategoryRoute)
app.use('/venues',venueRoute)
app.use('/districts',districtRoute)
app.use('/langs',langRoute)
app.use('/venuePhotos',venuePhotoRoute)
app.use('/venueTypes',venueTypesRoute)
app.use('/regions',regionRoute)
app.use('/types',typesRoute)


const PORT = process.env.PORT || 8888

sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on ${PORT}`);
	})
})