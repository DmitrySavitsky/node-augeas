var aug = require('../build/Release/libaugeas');

aug.createAugeas(function(aug) {
        if (!aug.error()) {
            console.log(aug.get('/files/etc/hosts/1/ipaddr'));
        } else {
            console.log('Sad, but true :-(');
        }
    }
);
console.log('Waiting for Heracles :-)');
