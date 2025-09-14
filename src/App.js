import './App.css';

function App() {
  return (
    <div className='flex items-center text-center'>
      <header className='flex flex-row justify-between'>
        <div class="notif-title">Notifications <span id="counter">3</span></div>
        <div class="mark-read">Mark all as read</div>
      </header>

      <div class="notif">
        <div class="notif-text">Mark Webber reacted to your recent post My first tournament today!</div>
        <div class="notif-time">1m ago</div>
      </div>

      <div class="notif">
        <div class="notif-text">Angela Gray followed you</div>
        <div class="notif-time">5m ago</div>
      </div>

      <div class="notif">
        <div class="notif-text">Jacob Thompson has joined your group Chess Club</div>
        <div class="notif-time">1 day ago</div>
      </div>

      <div class="notif">
        <div class="notif-text">Rizky Hasanuddin sent you a private message</div>
        <div class="notif-time">5 days ago</div>
        <div class="notif-quote">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.</div>
      </div>

      <div class="notif">
        <div class="notif-time">Kimberly Smith commented on your picture</div>
        <div class="notif-text">1 week ago</div>
      </div>

      <div class="notif">
        <div class="notif-text">Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate</div>
        <div class="notif-time">2 weeks ago</div>
      </div>

      <div class="notif">
        <div class="notif-text">Anna Kim left the group Chess Club</div>
        <div class="notif-time">2 weeks ago</div>
      </div>
    </div>
  );
}

export default App;
