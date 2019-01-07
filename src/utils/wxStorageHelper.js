function set(strKey, value) {
	let data = null;
	if (typeof value === 'object') {
		data = JSON.stringify(value);
	}
	else {
		data = value;
	}
	wx.setStorage({
		key: strKey,
		data,
	});
};

function get(strKey) {
	try {
		const strObj = wx.getStorageSync(strKey);
		if (strObj) {
			return strObj
		}
	} catch (e) {
		// Do something when catch error
		console.log(`Error : ${e}`);
		return null;
	}
};

function clear(strKey) {
	try {
		wx.clearStorageSync();
	} catch (e) {
		// Do something when catch error
	}
};


export {
	set,
	get,
	clear,
};
