import { Either } from "../core/Either";
import { Result } from "../core/Result";
import { APIErrorMessage } from "./api-error-message";

export type APIResponse<T> = Either<APIErrorMessage, Result<T>>;
