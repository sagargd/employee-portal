import React,{ Component } from 'react';
import { Col,Container, Row} from 'react-bootstrap';
import { getEmployees } from '../services/employee-services';
import  EmployeeList  from './EmployeeList';
import  SearchBar  from './SearchBar';

export const EmployeeContext = React.createContext();

export default class Home extends Component {

    constructor(){
        super();
        this.state={
            employees: [],
            filteredResult: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount(){
        let employees = await getEmployees()
           .catch(err=>console.log("Error in loading employees data"));
          // console.log(employees)
        this.setState({employees , filteredResult:employees});
    }

    handleSearch(searchText){
        if(searchText && searchText.length>0){
            searchText = searchText.toUpperCase();
            let filterResult = this.state.employees.filter((item)=> 
            item.Name.toUpperCase().indexOf(searchText) >=0 ||
            item.Location.toUpperCase().indexOf(searchText) >=0);
            this.setState({filterResult})
        }else{
            this.setState({filterResult: this.state.employees})
        }
    }

    render(){
        //console.log(this.state)
    return <EmployeeContext.Provider value = {{employees: this.state.employees,data:this.state.filteredResult,doSearch:this.handleSearch }}>
    <Container>
        <Row>
          <Col>
             <h2>Home Employee List All</h2>
             <SearchBar />
             <EmployeeList />
           </Col>
        </Row>
    </Container>
    </EmployeeContext.Provider>
    }
}


