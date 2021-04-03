import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, Typography, CardMedia, CardActionArea} from '@material-ui/core';

const Cards = {
    height: "120px",
    width: "100%",
    backgroundColor: "rgba(15,15,15)",
}
const Text = {
    marginTop: "-5px",
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    textDecoration: "none",
}
const cardImage = {
    height: "100%",
}

function RosterGenerate (props) {
    return Object.entries(props).map((i, key) => (
            <Grid item lg={4} md={12} xs={12} key={key}>
                <Card style={Cards}>
                <CardMedia image={process.env.PUBLIC_URL + '/emblems/'+i[1].class + '.png'} style={cardImage}>
                    <CardContent>
                        <Typography component="a" href={'https://www.warcraftlogs.com/character/id/' + i[1].wcLogsID} variant="h4" align='left' className={i[1].class} style={Text}>{i[1].name}</Typography>
                        <Typography variant="h6" align='left' className={i[1].class} style={Text}>{i[1].gRank}</Typography>
                        {i[1].bTag !== "" && <Typography variant="subtitle1" align='left' className={i[1].class} style={Text}>{i[1].bTag}</Typography>}
                    </CardContent>
                </CardMedia>
                </Card>
            </Grid>
    ));
}

export default RosterGenerate;