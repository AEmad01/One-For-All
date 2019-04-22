import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SlotD = props => (
    
    <tr>
        <td>{props.slot.date}</td>
        <td>{props.slot.booked.toString()}</td>


        <td>      <button onClick={() =>  axios({
  method: 'delete',
  url: 'http://localhost:3001/api/slots/' + props.slot._id,
})}>
        Delete
      </button>
</td>
    </tr>
)

const SlotB = props => (
    
    <tr>
        <td>{props.slot.date}</td>
        <td>{props.slot.booked.toString()}</td>

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
        
        axios.get('http://localhost:3001/api/slots/getslots/'+window.location.href.match(/\/([^\/]+)\/?$/)[1])
            .then(response => {
                this.setState({slots: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    SlotList() {
        if(localStorage.getItem('jwtToken').startsWith('L')){

            return this.state.slots.map(function(currentSlot, i)  {
                return <SlotD slot={currentSlot} key={i} />;
            })

        }
        if(localStorage.getItem('jwtToken').startsWith('M')){

            return this.state.slots.map(function(currentSlot, i)  {
                return <SlotB slot={currentSlot} key={i} />;
            })

        }

    }
    

    render() {
        return(
            <div>
                <h3>Slot List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
            
                        <tr>
                            <th>date</th>
                            <th>booked</th>
  
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