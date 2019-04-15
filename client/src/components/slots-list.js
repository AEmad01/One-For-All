import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Slot = props => (
    
    <tr>
        <td>{props.slot.location.toString()}</td>
        <td>{props.slot.date}</td>
        <td>{props.slot.booked.toString()}</td>
        <td>{props.slot.Appointments.toString()}</td>

               <td>
     <button onClick={() =>  axios({
  method: 'put',
  url: 'http://localhost:3001/api/slots/pick/' + props.slot._id,
  data: {
    booked: 'true', // This is the body part
    date: props.slot.date,
  }
})}>
        Book
      </button>


        </td>
    </tr>
)


export default class SlotList extends Component {
     

    constructor(props) {
        super(props)
        this.state = {slots: []}


    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/slots/')
            .then(response => {
                this.setState({slots: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    SlotList() {
        return this.state.slots.map(function(currentSlot, i)  {
            return <Slot slot={currentSlot} key={i} />;
        })
    }
    

    render() {
        return(
            <div>
                <h3>Slot List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
            
                        <tr>
                            <th>location</th>
                            <th>date</th>
                            <th>booked</th>
                            <th>Appointments</th>
  
                        </tr>
                    </thead>
                    <tbody>
                        { this.SlotList() }
                    </tbody>
                </table>
            </div>
        )
    }
}