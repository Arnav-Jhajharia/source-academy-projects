// Type your program in here!

function biggie_size(small_combo)
{
    // Checks whether it's a big combo, if not returns the big combo
    return small_combo <= 4? small_combo + 4: small_combo;
}

function unbiggie_size(big_combo)
{
    // Checks whether it's a big combo, if not returns the big combo
    return big_combo - 4;
}

function is_biggie_size(combo)
{
    return (combo > 4);
}

function combo_price(combo)
{
    return is_biggie_size(combo) ? unbiggie_size(combo) * 1.17 + 0.50 : combo * 1.17;
}

function empty_order()
{
    return 0;
}

function add_to_order(order, combo)
{
    return order * 10 + combo;
}

function last_combo(order)
{
    return order % 10;
}

function other_combos(order)
{
    return math_floor(order / 10);
}