document.querySelector('mgt-get').templateContext = {
    groupMail: messages => {
        let groupBy = (list, keyGetter) => {
            const map = new Map();
            list.forEach(item => {
                const key = keyGetter(item);
                const collection = map.get(key);
                if (!collection) {
                    map.set(key, [item]);
                } else {
                    collection.push(item);
                }
            });
            return map;
        };

        let grouped = groupBy(messages, m => m.sender.emailAddress.address);
        return [...grouped];
    }
};

