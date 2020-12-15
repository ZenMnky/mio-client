// const api = {
//     // make api calls
        
//             // get all
//             handleGetAllProfiles = () => {
//                 return fetch(`${API_BASE}/profiles`, {
//                     method: 'GET',
//                 })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(res.status)
//                     }
//                     return res.json();
//                 })
//                 .then( results => {
//                     this.setState({
//                         profiles: results
//                     })
//                 })
//                 .catch(error => this.setState({ error }))
//             },
            
//             // post
//             handleInsertProfile = (newProfile) => {
//                 // validate. is proifle json object?
                
//                 // fetch
//                 return fetch(`${API_BASE}/profiles`, {
//                     method: 'POST',
//                     body: JSON.stringify(newProfile)
//                 })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(res.status)
//                     }
//                     return res.json();
//                 })
//                 .catch(error => this.setState({ error }))
                
//             },

//             // get by id
//             // given an id, return the matching profile
//             handleGetById = (id) => {
                
//                 // fetch
//                 return fetch(`${API_BASE}/profiles/${id}`, {
//                     method: 'GET',
//                 })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(res.status)
//                     }
//                     return res.json();
//                 })
//                 .catch(error => this.setState({ error }))    
//             },

//             // patch by id
//             handleUpdateProfile = (id, updatedContent) => {
                
//                 // fetch
//                 return fetch(`${API_BASE}/profiles/${id}`, {
//                     method: 'PATCH',
//                     body: JSON.stringify(updatedContent)
//                 })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(res.status)
//                     }
//                     return res.json();
//                 })
//                 .catch(error => this.setState({ error }))
//             },

//             // delete by id
//             handleDeleteProfile = (id) => {
//                 // fetch
//                 return fetch(`${API_BASE}/profiles/${id}`, {
//                     method: 'DELETE',
//                 })
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error(res.status)
//                     }
//                     return res.json();
//                 })
//                 .catch(error => this.setState({ error }))
//             }

// }

// export default api;