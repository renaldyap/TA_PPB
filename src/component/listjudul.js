import React, {Component} from 'react'

class ListJudul extends Component{
    state ={
        data:[" ------ A ------","A Comic Artist’s Survival Guide","Absolute Sword Sense","Academy’s Undercover Professor","Arcana Fantasy","Archmage Transcending Through Regression","------ B ------","Barbarian Quest","------ C ------","Carnivorous Hunter","Champion’s Path to Murim","Chronicles Of The Martial God’s Return","------ D ------","Damn Reincarnation","Death Is the Only Ending for the Villainess","Demon in Mount Hua","Demonic Spirit King","Doctor’s Rebirth","Drug Devourer","Duke Pendragon","Dungeon Odyssey","------ E ------","Emperor’s Domination","Ending Maker","Existence","------ F ------","For My Forsaken Beloved","------ G ------","Genius of the Unique Lineage","------ H ------","Heavenly Demon Instructor","Heavenly Martial God","Heavenly Swords Grand Saga","Helmut: The Forsaken Child","Hero Has Returned","Hoarding in Hell","How To Live As a Villain","------ I ------","I Am the Fated Villain","I Became a Renowned Family’s Sword Prodigy","I Grow Stronger By Eating!","I Obtained a Mythic Item", "I Regressed As The Duke","I Reincarnated As The Crazed Heir","I Shall Live As a Prince","I’ll Be Taking A Break For Personal Reasons","I’m the Only One Loved by the Constellations!","------ J ------","-","------ K ------","Kill The Dragon","King of Runes","King of the Mound","------ L ------","Legend of Asura The Venom Dragon","Legend of Mir: The Golden Armored Dragon","Legendary Youngest Son of the Marquis House","------ M ------","Max Level Returner","Maxed Out Leveling","Mookhyang The Origin","My Civil Servant Life Reborn in the Strange World","My Daughter is a Dragon!","My Daughter is the Final Boss","My Healing Game","My Path to Killing Gods in Another World","My School Life Pretending To Be a Worthless Person","------ N ------", "Never Die Extra","------ O ------", "On My Way to Kill God","Overbearing Tyrant","Overpowered Sword","Player Who Can’t Level Up","------ P ------","Player Who Returned 10,000 Years Later","------ Q ------","-","------ R ------","Reaper of the Drifting Moon","Reformation of the Deadbeat Noble","Regressor Instruction Manual","Reincarnated Escort Warrior","Reincarnation Of The Strongest Sword God","Reincarnation of the Suicidal Battle God","Return of the 8th Class Magician","Return of the Disaster-Class Hero","Return of the Mount Hua Sect","Return Of The Shattered Constellation","Return of the SSS-Class Ranker","Return of The Unrivaled Spear Knight","Rise From The Rubble","------ S ------","Saving the Villain Who was Abandoned by the Female Lead Dropped","Shadowless Night","Shenwu Tianzun","Sleeping Ranker","Solo Bug Player","Solo Leveling","T","The Challenger","The Constellation That Returned From Hell","The Dark Magician Transmigrates After 66666 Years","The First Order", "The Frenzy Of Evolution", "The Live", "The Novel’s Extra (Remake)", "The Return of the Crazy Demon", "------ U ------","Ultimate Devouring System", "Ultra Alter","------ V ------", "Villain To Kill", "------ W ------", "Wandering Warrior of Wudang", "Warrior High School  Dungeon Raid Department", "World’s Strongest Troll", "Worn and Torn Newbie", "Worthless Regression",  "------ X ------","-","------ Y ------",  "Youngest Scion of the Mages","Your Talent is Mine","------ Z ------","---","",""]
    }
    render(){
        const result = this.state.data.map((value, index) => {
            return(<li key={index}>{value}</li>)
        })
        return(
            <div>
                <h1 id="lj">List Judul Manhwa</h1>
                    <ul id="rs">
                        {result}
                    </ul>
            </div>
        )
    }
}
export default ListJudul