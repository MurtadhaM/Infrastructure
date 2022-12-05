import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { WebhookTarget } from "./webhookTarget";
import template from "./adaptiveCards/notification-default.json";

/**
 * Fill in your incoming webhook url.
 */
const webhookUrl = process.env.TEAMS_WEB_HOOK
const webhookTarget = new WebhookTarget(new URL(webhookUrl));

/**
* Send adaptive cards.
*/

import template from  "../adaptiveCards/SnakeCustomCard.json";
webhookTarget.sendAdaptiveCard(
    AdaptiveCards.declare(template).render(
        template
        ))
.then(() => console.log("Send adaptive card successfully."))
.catch(e => console.log(`Failed to send adaptive card. ${e}`));
