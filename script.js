// accessing 'Mark all as Read' button, unread notifications and unread count
const button = document.querySelector("button");
const unreadCount = document.querySelector(".unread-count");
const unreadNot = document.querySelectorAll(".unread");
const unreadDots = document.querySelectorAll(".unread-dot");

// function to mark a notification as read
function markRead(notification, dot) {
	notification.classList.remove("unread");
	dot.classList.remove("unread-dot");
}

// function to mark all notifications as read
function markAllAsRead() {
	for (let i = 0; i < unreadNot.length; i++) {
		markRead(unreadNot[i], unreadDots[i]);
	}
	unreadCount.classList.add("hidden");
}

// function to mark a notification as read
for (let i = 0; i < unreadNot.length; i++) {
	unreadNot[i].addEventListener("click", () => {
		markRead(unreadNot[i], unreadDots[i]);
		unreadCount.innerHTML--;
		if (parseInt(unreadCount.innerHTML) === 0) {
			unreadCount.classList.add("hidden");
		}
	});
}

button.addEventListener("click", markAllAsRead);
