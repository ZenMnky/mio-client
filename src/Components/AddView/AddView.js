import React, { Component } from 'react';
import profileImg from '../../profileImg.jpg';

export default class AddView extends Component {
    render(){
        return(
            <article id="addRelationship" className='addRelationship articleView'>
                <h3>Add Relationship</h3>
                    <div>
                        <img 
                            className="profileImg"
                            src={profileImg}
                            alt='profile image' 
                        />
                    </div>
                <form action="">
                    <label for="first_name"></label>
                        <input id="first_name" type="text" placeholder="first name" />
                        
                        <label for="last_name"></label>
                    <input id="last_name" type="text" placeholder="last name" />
                    
                    <label for="nickname"></label>
                    <input id="nickname" type="text" placeholder="nickname" />
                    
                    <label for="image url"></label>
                    <input name="image url" type="text" placeholder='image url' />
                    
                    <select 
                        name="relationshipZone" 
                        id="selectRelationshipZone"
                        >
                        <option value="1">Zone 1</option>
                        <option value="2">Zone 2</option>
                        <option value="3">Zone 3</option>
                        <option value="4">Zone 4</option>
                        <option value="5">Zone 5</option>
                    </select>

                    <textarea name="" placeholder="admirable qualities"></textarea>
                    <textarea name="" placeholder="initial relationship notes"></textarea>
                    <button>Add</button>
                    <button>Cancel</button>
                </form>
            </article>
        )
    }
}