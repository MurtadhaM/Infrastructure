import { AdaptiveCards } from '@microsoft/adaptivecards-tools'
import { WebhookTarget } from './webhookTarget'

// Import the cards
import NotificationCard from '../adaptiveCards/notification-default.json'
import SnakeMesasgeCard from '../adaptiveCards/SnakeCustomCard.json'

// find a value in JSON object
function findValue (obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key]
  }

  var result, p
  return result
}

// Get all the Containers in the card
function getContainers (card) {
  var containers = []
  for (var i = 0; i < card.body.length; i++) {
    if (card.body[i].type == 'Container') {
      containers.push(card.body[i])
    }
  }
  return containers
}

// Get all the Elements in the card
function getElements (card) {
  var elements = []
  for (var i = 0; i < card.body.length; i++) {
    if (card.body[i].type == 'Container') {
      for (var j = 0; j < card.body[i].items.length; j++) {
        elements.push(card.body[i].items[j])
      }
    }
  }
  return elements
}

// Get all the Columns in the card
function getColumns (card) {
  var columns = []
  for (var i = 0; i < card.body.length; i++) {
    if (card.body[i].type == 'Container') {
      for (var j = 0; j < card.body[i].items.length; j++) {
        if (card.body[i].items[j].type == 'ColumnSet') {
          for (var k = 0; k < card.body[i].items[j].columns.length; k++) {
            columns.push(card.body[i].items[j].columns[k])
          }
        }
      }
    }
  }
  return columns
}

// search for a specific element in the card
function searchElement (card, elementId) {
  var elements = getElements(card)
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id == elementId) {
      return elements[i]
    }
  }
  return null
}

// Change the value of an element in the card
function changeElementValue (card, elementId, value) {
  var element = searchElement(card, elementId)
  if (element != null) {
    element.text = value
  }
}

// Search element based on current value
function searchElementByValue (card, value) {
  var elements = getElements(card)
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].text == value) {
      return elements[i]
    }
  }
  return null
}

// Change the value of an element in the card
function changeElementValueByValue (card, value, newValue) {
  var element = searchElementByValue(card, value)
  if (element != null) {
    element.text = newValue
  }
}

changeElementValueByValue(
  SnakeMesasgeCard,
  'This is the Notification Text',
  'All the baby 🐍 snakes are gone. We need to find them.'
)
changeElementValueByValue(
  SnakeMesasgeCard,
  'Notification Details',
  'I could not find any baby snakes. I am sad now. The end.'
)
changeElementValueByValue(NotificationCard, 'View Details', 'Open Snake App')

// Send the card to the webhook
const webhookUrl = process.env.TEAMS_WEB_HOOK
const webhookTarget = new WebhookTarget(new URL(webhookUrl))

webhookTarget
  .sendAdaptiveCard(
    AdaptiveCards.declare(NotificationCard).render({
      title: 'A Snake had Sent a Message',
      appName: 'Snake Notify',

      description: 'All the baby 🐍 snakes are gone. We need to find them.',
      notificationUrl: 'http://www.findasnake.com'
    })
  )
  .then(() => console.log('Send adaptive card successfully.'))
  .catch(e => console.log(`Failed to send adaptive card. ${e}`))

// Send the card to the webhook
const webhookUrl2 = process.env.TEAMS_WEB_HOOK
const webhookTarget2 = new WebhookTarget(new URL(webhookUrl2))

webhookTarget2
  .sendAdaptiveCard(
    AdaptiveCards.declare(SnakeCustomCard).render({
      title: 'A Snake had Sent a Message',
      appName: 'Snake Notify',
      description: 'All the baby 🐍 snakes are gone. We need to find them.',
      notificationUrl: 'http://www.findasnake.com'
    })
  )
  .then(() => console.log('Send adaptive card successfully.'))
  .catch(e => console.log(`Failed to send adaptive card. ${e}`))
