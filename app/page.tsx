
'use cache'


const APIURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const genre = '&classificationName=music'
const city = '&city=orlando';
const APIKey = '&apikey=6oAIyGa1mVsfbvosceVMLH9vsLcPsY5P';
const searchURL = JSON.stringify(genre + city + APIKey);
const cleanURL = searchURL.replace(/^"|.$/g, '')
const searchquery = `${APIURL}${cleanURL}`

export default async function GET() {
  
  const data = await fetch(searchquery);
  const list = await data.json();
  
  const db = list?._embedded?.events || [];
  const stock = db.filter(key => key?.dates?.status?.code === 'onsale');

  const onsale = stock.map((buy) => (
<li key={buy.id}>{buy?.dates?.status?.code === 'offsale' ? '1' : '2'}</li>
));
  const eventLi = db.map((key) => 
  <li key={key.id}>{key.name}:<strong>Date </strong>{key.sales?.public?.startDateTime.slice(0,10)} : On sale{key?.dates?.status?.code === 'onsale' ? ' On Sale. ' : ' Unavailable. '}</li>
);
  console.log(searchquery);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>Events</h2>
        <ul>
        {eventLi} : On sale now!
        </ul>
      </main>
    </div>
  );
}
