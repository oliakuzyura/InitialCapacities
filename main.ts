  const initialCapacities = {
                EUR: 50000,
                USD: 43000
            };

            [{
                total: {
                    amount: {
                        asset: { currency: 'GBP', type: 'Cash' },
                        quantity: 100000,
                    },
                },
            }, {
                total: {
                    amount: {
                        asset: { currency: 'EUR', type: 'Cash' },
                        quantity: -200000,
                    },
                },
            }].map(e => {
                if (initialCapacities.hasOwnProperty(e.total.amount.asset.currency))
                    initialCapacities[e.total.amount.asset.currency] += e.total.amount.quantity;
            });
