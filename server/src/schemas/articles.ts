import {model, Schema} from "mongoose";
import {Article} from "../models/article";

export const ArticleModel = model("Article", new Schema(Article.toSchema()));
