import './Roster.css';
import RosterGenerate from './RosterGenerate';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const roleTitle = {
    color: "#eeeeee"
}

function Roster() {
    let tank = {
        windowmaker : {name: "Windowmaker", class: "demonhunter", classRole: "Tank", gRank: "Guild Master", bTag: "Windowmaker#21208", wcLogsID: "55811408" },
        pollymonk : {name: "Pollymonk", class: "monk", classRole: "Tank", gRank: "Raider", bTag: "", wcLogsID: "36170447" }
    }
    let heal = {
        blasting : {name: "Blasting", class: "priest", classRole: "Healer", gRank: "Healing Officer", bTag: "Intensify#21581", wcLogsID: "51867950" },
        waze : {name: "Waze", class: "druid", classRole: "Healer", gRank: "Raid Leader", bTag: "WazeGG#2232", wcLogsID: "57654635" },
        valerys : {name: "Valerys", class: "paladin", classRole: "Healer", gRank: "Raider", bTag: "", wcLogsID: "45644817" },
        bagdadblast : {name: "Bagdadblast", class: "shaman", classRole: "Healer", gRank: "Raider", bTag: "", wcLogsID: "55914888" },
        bendie : {name: "Bendie", class: "shaman", classRole: "Healer", gRank: "Raider", bTag: "", wcLogsID: "57780059" },
        vedhelvete : {name: "Vedarn", class: "shaman", classRole: "Healer", gRank: "Raider", bTag: "", wcLogsID: "55186889" },
    }
    let dps = {
        kitsunewarr : {name:"Kitsunewarr", class: "warrior", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "46386784" },
        eveey : {name:"Eveey", class: "warrior", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "26202836" },
        pridk : {name:"Pridk", class: "deathknight", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "52682099" },
        markz : {name:"Markz", class: "demonhunter", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "37617273" },
        reliedekay : {name:"Reliedekay", class: "deathknight", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "20519993" },
        balazing : {name:"Balazing", class: "paladin", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "50523959" },
        ryuujij : {name:"Ryuujij", class: "rogue", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "52777078" },
        zephrax : {name:"Zephrax", class: "warlock", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "58493264" },
        zkippylock : {name:"Zkippylock", class: "warlock", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "46850405" },
        mirgan : {name:"Mirgan", class: "mage", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "56558290" },
        murkem : {name:"Murkem", class: "mage", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "34579201" },
        feinnt : {name:"Feinnt", class: "mage", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "19781466" },
        rinald : {name:"Rinald", class: "mage", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "52777081" },
        deepatraktor : {name:"Deepatraktor", class: "hunter", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "51154551" },
        syfii : {name:"Syfii", class: "hunter", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "32223184" },
        icon : {name:"Icon", class: "priest", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "37006332" },
        belzelina : {name:"Belzelina", class: "priest", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "53561436" },
        shadoppler : {name:"Shadoppler", class: "priest", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "57248989" },
        freddeszx : {name:"Freddeszx", class: "druid", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "46099388" },
        welstead : {name:"Welstead", class: "druid", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "58289755" },
        velii : {name:"Velii", class: "shaman", classRole:"DPS", gRank:"Raider", btag: "", wcLogsID: "52682179" },
    }

  return (
      <div style={{margin: "10px"}}>
        <Typography variant="h3" style={roleTitle}>TANKS</Typography>
        <Grid container spacing={2}>
            <RosterGenerate {...tank}/>
        </Grid>
        <Typography variant="h3" style={roleTitle}>HEALERS</Typography>
        <Grid container spacing={2}>
        <RosterGenerate {...heal}/>
        </Grid>
        <Typography variant="h3" style={roleTitle}>DPS</Typography>
        <Grid container spacing={2}>
        <RosterGenerate {...dps}/>
        </Grid>
      </div>
  );
}

export default Roster;
