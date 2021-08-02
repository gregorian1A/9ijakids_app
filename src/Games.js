import React, {useState} from "react";
import "./style.css";
import Game from './Game';

const Games = () => {
  const data = [{"GameTitle":"Before and After","GameDescription":"Before and After Yr 2 (prefix and suffix)","Topic":"Word Works and Spelling","Group":"Academic","Level":"Key Stage 1","Subject":"English","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Before and After"},{"GameTitle":"Communication","GameDescription":"Communication Yr 2 (different ways we can communicate)","Topic":"Social Studies","Group":"Academic","Level":"Key Stage 1","Subject":"Social Studies","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Communication"},{"GameTitle":"Kiddiepreneur 101","GameDescription":"Kiddiepreneur 101 (Intro to Earning and Spending)","Topic":"Financial Literacy","Group":"Financial Literacy","Level":"Financial Literacy","Subject":"Financial Literacy","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Kiddiepreneur 101"},{"GameTitle":"Money Matters","GameDescription":"Money Matters (Intro to Key Financial Terms)","Topic":"Financial Literacy","Group":"Financial Literacy","Level":"Financial Literacy","Subject":"Financial Literacy","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Money Matters"},{"GameTitle":"Maths Pop","GameDescription":"Maths Pop (writing numbers in word, sequencing & ordinal numbers)","Topic":"Number Sense","Group":"Academic","Level":"Key Stage 1","Subject":"Mathematics","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Maths Pop"},{"GameTitle":"Exploring Life","GameDescription":"Exploring Life KS","Topic":"Living Things & Non-Living Things","Group":"Academic","Level":"Key Stage 1","Subject":"Science","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Exploring Life"},{"GameTitle":"Mathsmania City - Decimals","GameDescription":"Mathsmania City - Decimal","Topic":"Decimals, Fractions & Percentage","Group":"Academic","Level":"Key Stage 2","Subject":"Mathematics","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Mathsmania City - Decimals"}];
  const dataWithId = data.map(game => {
    return {id: data.indexOf(game), ...game};
  })
  const [database, setDatabase] = useState(dataWithId);

  const [searchterm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const [level, setLevel] = useState('');
  const [group, setGroup] = useState('');

  const searchArray = database.filter(game => {
    if(!searchterm) return true;
    if(game.Topic.toLowerCase().includes(searchterm)) return true;
  }).map(game => <Game key={game.id} game={game} />);

  const filteredArray = database.map(game => {
    if (level === '' && group === '') return (<Game key={game.id} game={game} />) 
    if (level === 'Key Stage 1' && game.Level === 'Key Stage 1') return (<Game key={game.id} game={game} />) 
     if (level === 'Key Stage 2' && game.Level === 'Key Stage 2') return (<Game key={game.id} game={game} />) 
      if (level === 'Financial Literacy' && game.Level === 'Financial Literacy') return (<Game key={game.id} game={game} />) 
       if (group === 'Academic' && game.Group === 'Academic') return (<Game key={game.id} game={game} />) 
        if (group === 'Financial Literacy' && game.Group === 'Financial Literacy') return (<Game key={game.id} game={game} />) 
  })

  return (
    <>
    <input type="text"
    className="input"
    value={searchterm}
    onChange={handleChange}
    placeholder="Search by Topic"
    />
    <div className='filter'>
    <div class="dropdown">
    <button class="dropbtn">Filter by Level 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <div onClick={() => {setLevel('Key Stage 1') 
      setGroup('')}}>Key Stage 1</div>
      <div onClick={() => {setLevel('Key Stage 2')
    setGroup('')}}>Key Stage 2</div>
      <div onClick={() => {setLevel('Financial Literacy')
    setGroup('')}}>Financial Literacy</div>
    </div>
    
  </div> 

  <div class="dropdown">
    <button class="dropbtn">Filter by Group 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <div onClick={() => {setGroup('Academic')
    setLevel('')}}>Academic</div>
      <div onClick={() => {setGroup('Financial Literacy')
     setLevel('')}}>Financial Literacy</div>
    </div>
  </div> 
  <i onClick={() => {
      setLevel('')
      setGroup('')
    }} className='fa fa-refresh'></i>
      </div>
    <div className="games">
      {searchterm ? searchArray : filteredArray}
 {/* <pre>{JSON.stringify(database, null, 4)}</pre> */}
      </div>
      </>
  )
}

export default Games;