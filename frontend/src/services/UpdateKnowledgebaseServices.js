import axios from 'axios';
import Cookies from 'js-cookie';

export function updateKnowledgebase(upt) {
    return axios.post(`${process.env.REACT_APP_BACKEND}/adminDashboard/update`,{
        update_information:upt.update_information.value,
        headers: {
            Authorization: Cookies.get('jwt') //the token is a variable which holds the token
        }
    })
    .then(response => response.data)
};

export function getKnowledgebaseInfo() {
    return axios.get(`${process.env.REACT_APP_BACKEND}/adminDashboard/knowledgebase`, {
        headers: {
            Authorization: Cookies.get('jwt') //the token is a variable which holds the token
        }
    
    })
    .then(response => response.data)
};

export function deleteKnowledgebaseInfo(update_id) {
    return axios.delete(`${process.env.REACT_APP_BACKEND}/adminDashboard/knowledgebase/${update_id}`,{
        headers: {
            Authorization: Cookies.get('jwt') //the token is a variable which holds the token
        }
    })
    .then(response => response.data)
  }

