exports.normalizeData = (snapshot) => {
    let data = [];
    snapshot.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return data;
};