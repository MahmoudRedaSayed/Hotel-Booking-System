import React, { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment"
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import StripeCheckout from 'react-stripe-checkout'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomByIdAction } from '../Actions/Room';
import { bookingRoomAction } from '../Actions/Booking';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.refresh()

function Bookingscreen() {
    const params = useParams();
    const dispatch = useDispatch();
    const roomId = params.roomid
    const { room, loading, error, success } = useSelector(state => state.getRoomById)
    const { loadingBook } = useSelector(state => state.bookingRoom)
    const fromdate = moment(params.fromdate, 'DD-MM-YYYY')
    const todate = moment(params.todate, 'DD-MM-YYYY')
    const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1
    const [totalAmount, settotalAmount] = useState()
    useEffect(() => {
        dispatch(getRoomByIdAction(roomId))
    }, [dispatch])


    async function tokenHander(token) {

        console.log(token);
        const bookingDetails = {

            token,
            user: JSON.parse(localStorage.getItem('userInfo')),
            room,
            fromdate,
            todate,
            totalDays,
            totalAmount:room.rentperday*totalDays

        }

        dispatch(bookingRoomAction(bookingDetails));

    }

    return (
        <div className='m-5'>

            {loading||loadingBook ? (<Loader />) : error ? (<Error data="something is wrong" />) : success ? (

                <div className="row p-3 mb-5 bs" data-aos='flip-right' >
                    <div className="col-md-6 my-auto">

                        <div>
                            <h1> {room.name}</h1>
                            <img src={room.imageurls[0]} style={{ height: '400px' }} />
                        </div>

                    </div>
                    <div className="col-md-6 text-right" style={{ textAlign: "right" }}>
                        <div>
                            <h1><b>Booking Details</b></h1>
                            <hr />

                            <p><b>Name</b> : {JSON.parse(localStorage.getItem('userInfo')).name}</p>
                            <p><b>From Date</b> : {params.fromdate}</p>
                            <p><b>To Date</b> : {params.todate}</p>
                            <p><b>Max Count </b>: {room.maxcount}</p>
                        </div>

                        <div className='mt-5'>
                            <h1><b>Amount</b></h1>
                            <hr />
                            <p>Total Days : <b>{totalDays}</b></p>
                            <p>Rent Per Day : <b>{room.rentperday}</b></p>
                            <h1><b>Total Amount : {room.rentperday*totalDays} /-</b></h1>

                            <StripeCheckout
                                amount={room.rentperday*totalDays * 100}
                                shippingAddress
                                token={tokenHander}
                                stripeKey='pk_test_51Lk44xDFJKV4Y7SsJGz17BGFxsuLOMyF91Hjs2DqPrlz85MScfEZ2JbMrtWTXxV3HvhTYvivFMjIZOGyqEURGCej00cm6b8fK8'
                                currency='INR'
                            >


                                <button className='btn btn-primary'>Pay Now</button>

                            </StripeCheckout>
                        </div>



                    </div>

                </div>

            ) : ""}

        </div>
    )
}

export default Bookingscreen