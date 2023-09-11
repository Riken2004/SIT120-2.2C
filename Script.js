const app = Vue.createApp({
    data() {
        return {
            carbon: 0,
            energy: 0,
            water: 0,
            totalCarbon: 0, 
        };
    },

    methods: {
        Submit() {
            // Example formula 
            const carboncalculator = 0.7;
            const energyconsumption = 0.4;
            const waterutility = 0.2;

            // Calculation of the total carbon footprint
            this.totalCarbon = this.carbon * carboncalculator + this.energy * energyconsumption + this.water * waterutility;
        },
    },
});

app.mount('#app');
