const CLIENT_ID = "qQnrWmpkG77yNzaIQPXRak7Y4l1fk1ym";

export const getDeepLink = (name, dropoffLat, dropoffLong) => {
    return `https://m.uber.com/ul/?client_id=${CLIENT_ID}&action=setPickup&pickup[nickname]=Mim&dropoff[latitude]=${dropoffLat}&dropoff[longitude]=${dropoffLong}&dropoff[nickname]=${name}`;
}