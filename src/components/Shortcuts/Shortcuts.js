export function Shortcuts() {
    return (
        <aside className="sidebar static">
            <div className="widget">
                <h4 className="widget-title">Shortcuts</h4>
                <ul className="naves">
                    <li>
                        <i className="ti-mouse-alt" />
                        <a href="inbox.html">Inbox</a>
                    </li>
                    <li>
                        <i className="ti-user" />
                        <a href="timeline-friends.html">Friends</a>
                    </li>
                    <li>
                        <i className="ti-image" />
                        <a href="timeline-photos.html">Images</a>
                    </li>
                    <li>
                        <i className="ti-video-camera" />
                        <a href="timeline-videos.html">Videos</a>
                    </li>
                    <li>
                        <i className="ti-comments-smiley" />
                        <a href="messages.html">Messages</a>
                    </li>
                    <li>
                        <i className="ti-bell" />
                        <a href="notifications.html">Notifications</a>
                    </li>
                    <li>
                        <i className="ti-power-off" />
                        <a href="landing.html">Logout</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};