const counters = document.querySelectorAll('.stat_title span');
const container = document.querySelector('.stats_block');

let activated = false;

window.addEventListener('scroll', () => {
  if ( pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
    counters.forEach(counter => {
        counter.innerText = counter.getAttribute("data-start");

        let count = Number(counter.getAttribute('data-start'));

        function updateCount() {
            const target = parseInt(counter.dataset.count);

            if (count < target) {
                count++;

                counter.innerText = count;

                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();

        activated = true;
    });
  }
})