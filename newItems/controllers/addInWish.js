const { itemsSchema } = require("../models/item");
const wishList = require("../models/wishList")

const addToWishlist = async (req, res) => {
    const { prodDetail, prod } = req.body;
    const { userId } = req.params
    console.log(req.body, prodDetail, prod);

    let prodDetails;
    if (prodDetail === 'from cart') {
        prodDetails = await itemsSchema.findById(prod);
    } else {
        console.log('else wala challa ha ');

        prodDetails = prodDetail
    }


    // Required fields check
    if (!prodDetails || !prodDetails.name || !prodDetails.category || !prodDetails.price) {
        return res.status(400).json({ success: false, message: 'Missing required prodDetails fields (name, category, price)' });
    }

    // Map frontend prodDetails to wishlist schema fields
    const wishlistItem = {
        Owners: userId,
        productID: prod,
        name: prodDetails.name,
        category: prodDetails.category,
        price: String(prodDetails.price),      // schema expects String
        qty: prodDetails.qty || 1,             // default 1
        rating: prodDetails.rating || 0,       // default 0
        img: prodDetails.images?.[0] || prodDetails.img || '', // first image or empty
    };

    // Check if already exists (unique index on Owners + name)
    const existing = await wishList.findOne({ Owners: userId, name: prodDetails.name });
    if (existing) {
        // Option 1: update quantity
        existing.qty += wishlistItem.qty;
        await existing.save();
        // return res.json({ success: true, wishlist: existing, message: 'Quantity updated' });

        // Option 2: return error (uncomment below if you prefer)
        return res.status(409).json({ success: false, message: 'prodDetails already in wishlist' });
    }

    const newWishlistItem = await wishList.create(wishlistItem);
    res.status(201).json({ success: true, wishlist: newWishlistItem });
}

const AllWishlist = async (req, res) => {
    const { userId } = req.params;
    console.log('333555555553 ' + userId);
    // const prodDetails = req.body;

    const item = await wishList.find({ Owners: userId })
    // console.log(item);

    if (item) {
        res.status(201).json({
            success: true,
            message: "All in wishlist",
            item,
        });

    }
};

module.exports = { addToWishlist, AllWishlist }