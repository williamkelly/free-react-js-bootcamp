import React from 'react'
import {
    Route,
    Link,
} from 'react-router-dom'

function Topic ({ match }) {
    return (
        <div>
            <h3>{match.params.topicid}</h3>  
        </div>
    )
}

export default function Topics ({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Props Vs State</Link></li>
            </ul>

            <hr />

            <Route path={`${match.path}/:topicid`} component={Topic} />
            <Route exact path={match.path} render={() => {
                return <h3>Please select a topic.</h3>
            }} />
        </div>
    )
}
