const { Router } = require("express");
const champsController = require("../controllers/champsController");

const ChampsRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Champion:
 *       type: object
 *       required:
 *         - id
 *         - key
 *         - name
 *       properties:
 *         type:
 *           type: string
 *         format:
 *           type: string
 *         version:
 *           type: string
 *         id:
 *           type: string
 *           description: Identificador único de Riot para el campeón.
 *         key:
 *           type: string
 *           description: Identificador numérico en formato string.
 *         name:
 *           type: string
 *         title:
 *           type: string
 *         blurb:
 *           type: string
 *         lore:
 *           type: string
 *         allytips:
 *           type: array
 *           items:
 *             type: string
 *         enemytips:
 *           type: array
 *           items:
 *             type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         partype:
 *           type: string
 *         image:
 *           type: object
 *           properties:
 *             full:
 *               type: string
 *             sprite:
 *               type: string
 *             group:
 *               type: string
 *             x:
 *               type: integer
 *             y:
 *               type: integer
 *             w:
 *               type: integer
 *             h:
 *               type: integer
 *         skins:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               num:
 *                 type: integer
 *               name:
 *                 type: string
 *               chromas:
 *                 type: boolean
 *         info:
 *           type: object
 *           properties:
 *             attack:
 *               type: number
 *             defense:
 *               type: number
 *             magic:
 *               type: number
 *             difficulty:
 *               type: number
 *         stats:
 *           type: object
 *           properties:
 *             hp:
 *               type: number
 *             hpperlevel:
 *               type: number
 *             mp:
 *               type: number
 *             mpperlevel:
 *               type: number
 *             movespeed:
 *               type: number
 *             armor:
 *               type: number
 *             armorperlevel:
 *               type: number
 *             spellblock:
 *               type: number
 *             spellblockperlevel:
 *               type: number
 *             attackrange:
 *               type: number
 *             hpregen:
 *               type: number
 *             hpregenperlevel:
 *               type: number
 *             mpregen:
 *               type: number
 *             mpregenperlevel:
 *               type: number
 *             crit:
 *               type: number
 *             critperlevel:
 *               type: number
 *             attackdamage:
 *               type: number
 *             attackdamageperlevel:
 *               type: number
 *             attackspeedperlevel:
 *               type: number
 *             attackspeed:
 *               type: number
 *         spells:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               tooltip:
 *                 type: string
 *               leveltip:
 *                 type: object
 *               maxrank:
 *                 type: integer
 *               cooldown:
 *                 type: array
 *                 items:
 *                   type: number
 *               cost:
 *                 type: array
 *                 items:
 *                   type: number
 *               costType:
 *                 type: string
 *               range:
 *                 type: array
 *                 items:
 *                   type: number
 *               image:
 *                 type: object
 *               resource:
 *                 type: string
 *         passive:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *         recommended:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               champion:
 *                 type: string
 *               title:
 *                 type: string
 *               map:
 *                 type: string
 *               mode:
 *                 type: string
 *               type:
 *                 type: string
 *               blocks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           count:
 *                             type: integer
 */

/**
 * @swagger
 * /champs:
 *   get:
 *     summary: Obtiene todos los campeones o filtra por nombre.
 *     tags:
 *       - Campeones
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Nombre (o parte) del campeón
 *     responses:
 *       200:
 *         description: Lista de campeones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Champion'
 *       404:
 *         description: Campeón no encontrado
 *   post:
 *     summary: Crea un nuevo campeón
 *     tags:
 *       - Campeones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Champion'
 *     responses:
 *       201:
 *         description: Campeón creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Champion'
 *       400:
 *         description: Datos inválidos
 *       409:
 *         description: Campeón duplicado
 *       500:
 *         description: Error al crear el campeón
 */
ChampsRouter.get("/", champsController.getChamps);
ChampsRouter.post("/", champsController.createChamp);

/**
 * @swagger
 * /champs/tag/{tag}:
 *   get:
 *     summary: Obtiene campeones por etiqueta (rol)
 *     tags:
 *       - Campeones
 *     parameters:
 *       - in: path
 *         name: tag
 *         required: true
 *         schema:
 *           type: string
 *         description: Rol o etiqueta (por ejemplo, Mage, Assassin)
 *     responses:
 *       200:
 *         description: Lista de campeones filtrados por etiqueta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Champion'
 *       500:
 *         description: Error del servidor
 */
ChampsRouter.get("/tag/:tag", champsController.getChampsByTag);

/**
 * @swagger
 * /champs/id/{id}:
 *   get:
 *     summary: Obtiene un campeón por su identificador de Riot
 *     tags:
 *       - Campeones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador de Riot (por ejemplo, Aatrox)
 *     responses:
 *       200:
 *         description: Campeón encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Champion'
 *       404:
 *         description: Campeón no encontrado
 *       500:
 *         description: Error del servidor
 */
ChampsRouter.get("/id/:id", champsController.getChampByRiotId);

/**
 * @swagger
 * /champs/batch:
 *   post:
 *     summary: Crea múltiples campeones en una sola operación
 *     tags:
 *       - Campeones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - champs
 *             properties:
 *               champs:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Champion'
 *     responses:
 *       201:
 *         description: Resultado de la operación masiva
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 created:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Champion'
 *                 skipped:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       reason:
 *                         type: string
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       reason:
 *                         type: string
 *       400:
 *         description: Petición inválida
 *       500:
 *         description: Error al crear los campeones
 */
ChampsRouter.post("/batch", champsController.createManyChamps);

module.exports = ChampsRouter;
