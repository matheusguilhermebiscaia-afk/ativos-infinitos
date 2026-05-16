import { Router, type IRouter } from "express";
import healthRouter from "./health";
import produtosRouter from "./produtos";
import movimentacoesRouter from "./movimentacoes";
import relatoriosRouter from "./relatorios";
import configLojasRouter from "./config-lojas";
import backupRouter from "./backup";

const router: IRouter = Router();

router.use(healthRouter);
router.use(produtosRouter);
router.use(movimentacoesRouter);
router.use(relatoriosRouter);
router.use(configLojasRouter);
router.use(backupRouter);

export default router;
